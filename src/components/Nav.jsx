"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const ITEMS = [
  { href: "/", label: "Cover" },
  { href: "/chapter-1", label: "Ch.1 · Recognition of Need" },
  { href: "/chapter-2", label: "Ch.2 · Feasibility Study" },
  { href: "/chapter-3-gathering", label: "Ch.3 · Information Gathering" },
  { href: "/chapter-3-analysis", label: "Ch.3 · Analysis & Cost-Benefit" },
  { href: "/chapter-4-design", label: "Ch.4 · Candidate Systems" },
  { href: "/chapter-4-database", label: "Ch.4 · Database & Forms" },
  { href: "/team", label: "Group & Course" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-14 flex items-center justify-between px-5 border-b border-[var(--color-hair)] bg-[var(--color-ink)]/95 backdrop-blur z-40 md:hidden">
        <Link href="/" className="font-[var(--font-display)] text-[var(--color-paper)]">
          Daraz SAD
        </Link>
        <button
          onClick={() => setOpen(true)}
          aria-label="Open navigation"
          className="flex items-center justify-center w-9 h-9 rounded-full border border-[var(--color-hair)] text-[var(--color-paper)]"
        >
          <Menu size={17} />
        </button>
      </div>

      <nav
        className={`fixed top-0 left-0 h-full w-72 shrink-0 border-r border-[var(--color-hair)] bg-[var(--color-panel)] z-50 transform transition-transform duration-300 md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 pt-6 pb-5 border-b border-[var(--color-hair)]">
          <div>
            <div className="font-mono text-[11px] tracking-wide text-[var(--color-signal)]">CSE 346 · GROUP 05</div>
            <div className="font-[var(--font-display)] text-lg text-[var(--color-paper)] leading-tight mt-1">
              Daraz SAD
            </div>
          </div>
          <button onClick={() => setOpen(false)} className="md:hidden text-[var(--color-paper-dim)]">
            <X size={20} />
          </button>
        </div>
        <ul className="px-3 py-5 space-y-1 overflow-y-auto" style={{ maxHeight: "calc(100% - 160px)" }}>
          {ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block px-3 py-2.5 rounded-md text-sm transition-colors ${
                    active
                      ? "bg-[var(--color-panel-2)] text-[var(--color-signal)]"
                      : "text-[var(--color-paper-dim)] hover:text-[var(--color-paper)] hover:bg-[var(--color-panel-2)]/60"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="absolute bottom-0 left-0 right-0 px-6 py-5 border-t border-[var(--color-hair)] font-mono text-[10.5px] text-[var(--color-paper-dim)] leading-relaxed">
          Southeast University
          <br />
          Dept. of CSE — Summer 2026
        </div>
      </nav>

      {open && <div onClick={() => setOpen(false)} className="fixed inset-0 bg-black/50 z-40 md:hidden" />}
    </>
  );
}
