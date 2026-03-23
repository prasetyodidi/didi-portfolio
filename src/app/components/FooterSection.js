import Link from "next/link";

function FooterSection() {
  return (
    <footer className="bg-slate-900 border-t border-white/10 text-slate-400 text-center py-8">
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="font-medium text-slate-300">
          &copy; 2026 Made with ❤️ by Didi Prasetyo.
        </p>
        <p className="text-sm text-slate-500">
          Source code available on{" "}
          <Link
            href="https://github.com/prasetyodidi"
            target="_blank"
            className="text-primaryOrange hover:underline underline-offset-2 transition-all"
          >
            GitHub
          </Link>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default FooterSection;
