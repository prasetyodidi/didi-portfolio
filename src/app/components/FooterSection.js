import Link from "next/link";

function FooterSection() {
  return (
    <footer className="text-black text-center py-3">
      @2023 Made with ❤️ by { }
      <Link href="https://github.com/prasetyodidi" target="_blank" className="text-blue-500 hover:underline underline-offset-2">
        prasetyodidi
      </Link>{" "}
      all right reserved
    </footer>
  );
}

export default FooterSection;
