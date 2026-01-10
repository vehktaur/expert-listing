import {
  Home1,
  Toolbox,
  Profile,
  Article,
  Scroll,
  TaskSquare,
  Logo,
} from "@/assets/icons";
import NavLink from "./nav-link";
import ProfileMenu from "./profile-menu";
import Calendar from "./calendar";
import BudgetingModal from "./budgeting-modal";
import SearchActivity from "./search-activity";
import PayoutCenter from "./payout-center";
import MarketPlace from "./market-place";

const navList = [
  { label: "Dashboard", icon: Home1, href: "/" },
  { label: "Listings", icon: Toolbox, href: "." },
  { label: "Users", icon: Profile, href: "." },
  { label: "Request", icon: Article, href: "." },
  { label: "Applications", icon: Scroll, href: "." },
  { label: "Tasks", icon: TaskSquare, href: "." },
];

const Header = () => {
  const actions = [
    { Component: BudgetingModal, id: "Budgeting" },
    { Component: Calendar, id: "Calendar" },
    { Component: SearchActivity, id: "Activity Log" },
    { Component: PayoutCenter, id: "Payout Center" },
    { Component: MarketPlace, id: "Marketplace" },
  ];

  return (
    <header className="sticky top-0 w-full z-50">
      <section className="clamp-[pt,5,7] clamp-[pb,4,7] bg-primary border-b border-gray-100 text-white px-5">
        <div className="max-w-7xl mx-auto flex items-center gap-4 flex-wrap">
          <Logo className="clamp-[w,36,50]" />
          <div className="flex items-center clamp-[gap,5,6] ms-auto">
            {actions.map(({ id, Component }) => {
              return <Component key={id} />;
            })}

            <ProfileMenu />
          </div>
        </div>
      </section>
      <section className="px-5 py-3.5 border-b border-gray-100 bg-white">
        {/* Navigation - Bottom */}
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Navigation Items */}
          <ul
            className="flex items-center clamp-[gap,4,10] overflow-x-auto"
            style={{
              scrollbarWidth: "none",
            }}
          >
            {navList.map((nav) => {
              const Icon = nav.icon;
              return (
                <li key={nav.label}>
                  <NavLink
                    href={nav.href}
                    classNames={{
                      default:
                        "flex items-center gap-2 hover:text-primary hover:bg-primary/15 transition-colors duration-200 text-sm rounded-lg clamp-[px,3,1.31rem] clamp-[py,1,0.44rem]",
                      active: "text-primary font-semibold bg-primary/15",
                    }}
                  >
                    <Icon className="size-6" />
                    {nav.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default Header;
