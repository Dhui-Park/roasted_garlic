import { Link } from "react-router";
import { Separator } from "./ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { cn } from "~/lib/utils";

const menus = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "Challenges",
    to: "/challenges",
    items: [
      {
        name: "나의 챌린지",
        description: "참여 중인 챌린지를 확인하고 대시보드로 이동해요.",
        to: "/challenges",
      },
      {
        name: "새 챌린지 도전하기",
        description: "목표와 기간을 설정해서 새로운 챌린지를 시작해요.",
        to: "/challenges/new",
      },
    ],
  },
];

export default function Navigation() {
  return (
    <nav className="flex h-12 items-center justify-between px-6 fixed top-4 left-1/2 -translate-x-1/2 z-50 backdrop-blur-md bg-background/70 shadow-sm border border-border/50 rounded-full">
      <div className="flex items-center">
        {/* Brand */}
        <Link to="/" className="font-bold tracking-tighter text-lg">
          roasted garlic.
        </Link>

        <Separator orientation="vertical" className="h-6 mx-4" />

        {/* Menus */}
        <NavigationMenu>
          <NavigationMenuList>
            {menus.map((menu) => (
              <NavigationMenuItem key={menu.name}>
                {menu.items ? (
                  <>
                    {/* 트리거 자체가 링크처럼 보이게 유지 */}
                    <Link to={menu.to}>
                      <NavigationMenuTrigger>{menu.name}</NavigationMenuTrigger>
                    </Link>

                    <NavigationMenuContent>
                      <ul className="grid w-[520px] font-light gap-3 p-4 grid-cols-2">
                        {menu.items.map((item) => (
                          <NavigationMenuItem
                            key={item.name}
                            className={cn(
                              "select-none rounded-md transition-colors focus:bg-accent hover:bg-accent"
                            )}
                          >
                            <NavigationMenuLink asChild>
                              <Link
                                className="p-3 space-y-1 block leading-none no-underline outline-none"
                                to={item.to}
                              >
                                <span className="text-sm font-medium leading-none">
                                  {item.name}
                                </span>
                                <p className="text-sm leading-snug text-muted-foreground">
                                  {item.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </NavigationMenuItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link
                    className={cn(
                      // 기존 trigger 스타일 느낌을 유지하고 싶으면 아래처럼 처리
                      "inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
                    )}
                    to={menu.to}
                  >
                    {menu.name}
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* 오른쪽 영역은 일단 비워둠: Home + Challenges만 필요하다고 했으니까 */}
      <div />
    </nav>
  );
}
