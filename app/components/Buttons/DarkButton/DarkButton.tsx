import Link from "next/link";

interface IDarkButtonProps {
    route: string,
    title: string;
    px: number;
    py: number;
}


const DarkButton: React.FC<IDarkButtonProps>= ({route, title, px, py})=>
{
  return (
    <Link
      href={route}
      className={`px-${px} py-${py} w-fit flex items-center mx-4 gap-5 self-start rounded-lg bg-dark-red font-medium text-muted-gold transition-colors hover:bg-bright-red text-2xl sm:text-3xl shadow-custom-shadow`}
    >
      <span>{title}</span>
    </Link>)
};


export default DarkButton;
