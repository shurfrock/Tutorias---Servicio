import { Transition } from "react-transition-group";
import {
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  createRef,
  useRef,
} from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import useCallbackState from "../../utils/callback-state";
import { selectSideMenu } from "../../stores/sideMenuSlice";
import { useAppSelector } from "../../stores/hooks";
import { FormattedMenu, linkTo, nestedMenu, enter, leave } from "./side-menu";
import Lucide from "../../base-components/Lucide";
import logoUrl from "../../assets/images/logo.svg";
import clsx from "clsx";
import TopBar from "../../components/TopBar";
import DarkModeSwitcher from "../../components/DarkModeSwitcher";
import MainColorSwitcher from "../../components/MainColorSwitcher";
import SimpleBar from "simplebar";

function Main() {
  const location = useLocation();
  const [formattedMenu, setFormattedMenu] = useState<
    Array<FormattedMenu | string>
  >([]);
  const sideMenuStore = useAppSelector(selectSideMenu);
  const sideMenu = () => nestedMenu(sideMenuStore, location);

  useEffect(() => {
    setFormattedMenu(sideMenu());
  }, [sideMenuStore, location.pathname]);

  const [simpleMenu, setSimpleMenu] = useCallbackState({
    active: false,
    hover: false,
    wrapper: false,
  });
  const [mobileMenu, setMobileMenu] = useState(false);
  const scrollableRef = createRef<HTMLDivElement>();
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Set active/inactive simple menu
  const toggleSimpleMenu = (event: React.MouseEvent) => {
    event.preventDefault();

    if (simpleMenu.active) {
      setSimpleMenu(
        {
          ...simpleMenu,
          hover: true,
        },
        (simpleMenu) => {
          if (wrapperRef.current) {
            wrapperRef.current.animate(
              {
                marginLeft: "270px",
              },
              {
                duration: 200,
              }
            ).onfinish = function () {
              if (wrapperRef.current) {
                wrapperRef.current.style.marginLeft = "270px";
              }
              setSimpleMenu(
                {
                  ...simpleMenu,
                  hover: false,
                  active: false,
                  wrapper: false,
                },
                () => {
                  if (wrapperRef.current) {
                    wrapperRef.current.removeAttribute("style");
                  }
                }
              );
            };
          }
        }
      );
    } else {
      setSimpleMenu(
        {
          ...simpleMenu,
          active: true,
          wrapper: true,
        },
        () => {
          if (wrapperRef.current) {
            wrapperRef.current.style.marginLeft = "270px";
            wrapperRef.current.animate(
              {
                marginLeft: "112px",
              },
              {
                duration: 200,
              }
            ).onfinish = function () {
              if (wrapperRef.current) {
                wrapperRef.current.removeAttribute("style");
              }
            };
          }
        }
      );
    }
  };

  // Set active/inactive mobile menu
  const toggleMobileMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setMobileMenu(!mobileMenu);
  };

  useEffect(() => {
    if (scrollableRef.current) {
      new SimpleBar(scrollableRef.current);
    }
    setFormattedMenu(sideMenu());
  }, [sideMenuStore, location.pathname]);

  return (
    <div className="flex">
      <DarkModeSwitcher />
      <MainColorSwitcher />
      {/* BEGIN: Side Menu */}
      <nav
        className={clsx([
          "absolute z-[52] xl:z-auto -ml-[100%] xl:ml-0 transition-[width,margin-left] w-[270px] h-screen flex flex-col pl-6 pr-2 overflow-hidden bg-primary bg-gradient-to-b from-primary via-primary/70 to-black/30 duration-300 ease-in-out dark:bg-darkmode-800 dark:bg-none",
          "before:content-[''] before:ease-in-out xl:before:ease before:duration-300 xl:before:duration-[0s] before:transition-opacity xl:before:transition-none before:inset-0 xl:before:top-0 xl:before:left-0 before:bg-black/60 xl:before:bg-transparent before:z-[-2] xl:before:z-0 xl:before:visible before:bg-[length:270px_auto] before:bg-[right_3.5rem] xl:before:bg-[url('../../assets/images/backgrounds/bg-main.png')] before:animate-[0.4s_ease-in-out_0.3s_intro-divider] before:animate-fill-mode-forwards before:w-full before:h-screen before:fixed xl:before:absolute before:top-0 before:left-0 before:bg-no-repeat",
          "after:content-[''] after:dark:bg-darkmode-800 xl:after:dark:bg-transparent after:bg-primary xl:after:bg-transparent after:w-full after:h-screen after:absolute after:top-0 after:left-0 xl:after:mt-[3.5rem] after:bg-gradient-to-b after:from-primary after:via-primary/70 after:to-black/10 after:dark:from-darkmode-800 after:dark:via-darkmode-800/70",
          {
            "ml-0": mobileMenu,
            "before:invisible before:opacity-0": !mobileMenu,
            "before:visible before:opacity-100": mobileMenu,
            "xl:relative": !simpleMenu.active,
            "xl:w-[112px] xl:z-[52] xl:absolute": simpleMenu.active,
            hover: simpleMenu.hover,
            "hover:w-[270px] hover:shadow-lg hover:min-h-screen":
              simpleMenu.active,
            "[&.hover]:w-[270px] [&.hover]:shadow-lg [&.hover]:min-h-screen":
              simpleMenu.active,
            "[&:hover_[data-menu-title]]:flex": simpleMenu.active,
            "[&.hover_[data-menu-title]]:flex": simpleMenu.active,
            "[&:hover_[data-menu-divider]]:text-white/50": simpleMenu.active,
            "[&.hover_[data-menu-divider]]:text-white/50": simpleMenu.active,
            "[&:hover_[data-menu-divider]:before]:text-transparent":
              simpleMenu.active,
            "[&.hover_[data-menu-divider]:before]:text-transparent":
              simpleMenu.active,
            "[&:hover_[data-logo]]:ml-0": simpleMenu.active,
            "[&.hover_[data-logo]]:ml-0": simpleMenu.active,
            "[&:hover_[data-logo-text]]:opacity-100": simpleMenu.active,
            "[&.hover_[data-logo-text]]:opacity-100": simpleMenu.active,
            "[&:hover_[data-toggler]]:opacity-100": simpleMenu.active,
            "[&.hover_[data-toggler]]:opacity-100": simpleMenu.active,
          },
        ])}
      >
        <div className="pt-4 mb-4">
          <div className={clsx(["flex items-center h-[33px]"])}>
            <Link to="/" className="flex items-center intro-x">
              <img
                alt="Rocketman Tailwind HTML Admin Template"
                className={clsx([
                  "w-[1.6rem]",
                  simpleMenu.active &&
                    "xl:ml-5 transition-all duration-200 ease-in-out",
                ])}
                src={logoUrl}
                data-logo
              />
              <span
                data-logo-text
                className={clsx([
                  "text-white pt-0.5 text-lg ml-2.5",
                  simpleMenu.active &&
                    "xl:opacity-0 transition-opacity duration-200 ease-in-out",
                ])}
              >
                Waveform
              </span>
            </Link>
            <a
              href="#"
              onClick={toggleSimpleMenu}
              className={clsx([
                "hidden pr-5 ml-auto text-white transition-all duration-300 ease-in-out z-[5] xl:block text-opacity-70 hover:text-opacity-100",
                simpleMenu.active &&
                  "opacity-0 transition-opacity duration-200 ease-in-out",
              ])}
              data-toggler
            >
              <Lucide
                icon="ArrowLeftCircle"
                className={clsx([
                  "w-5 h-5 transition-transform duration-300 ease-in-out",
                  simpleMenu.active && "transform rotate-180",
                ])}
              />
            </a>
            <a
              href="#"
              onClick={toggleMobileMenu}
              className="pr-5 ml-auto text-white transition-all duration-300 ease-in-out mobile-menu-toggler z-[5] xl:hidden text-opacity-70 hover:text-opacity-100"
            >
              <Lucide
                icon="XCircle"
                className="w-5 h-5 transition-transform duration-300 ease-in-out"
              />
            </a>
          </div>
        </div>
        <div
          ref={scrollableRef}
          className={clsx([
            "relative z-10 -ml-5 pl-5 pt-5 pb-5 h-full overflow-y-auto [-webkit-mask-image:-webkit-linear-gradient(top,rgba(0,0,0,0),black_30px)] [&:-webkit-scrollbar]:w-0 [&:-webkit-scrollbar]:bg-transparent",
            "[&_.simplebar-content]:p-0 [&_.simplebar-track.simplebar-vertical]:w-[10px] [&_.simplebar-track.simplebar-vertical]:pt-[3.1rem] [&_.simplebar-track.simplebar-vertical]:mr-0.5 [&_.simplebar-track.simplebar-vertical_.simplebar-scrollbar]:before:bg-white/20",
          ])}
        >
          <ul className="pr-5 overflow-x-hidden">
            {/* BEGIN: First Child */}
            {formattedMenu.map((menu, menuKey) =>
              typeof menu === "string" ? (
                <li
                  className={clsx([
                    "mb-4 w-full h-5 pl-5 text-xs relative [&:not(:first-child)]:mt-6",
                    !simpleMenu.active && "text-white/50",
                    simpleMenu.active &&
                      "text-white/50 xl:text-transparent whitespace-nowrap",
                    simpleMenu.active &&
                      "xl:before:content-['...'] before:absolute before:inset-0 before:text-white/50 before:text-opacity-70 before:text-2xl before:w-full before:text-center before:-mt-3.5",

                    // Animation
                    `opacity-0 animate-[0.4s_ease-in-out_0.1s_intro-divider] animate-fill-mode-forwards animate-delay-${
                      (menuKey + 1) * 10
                    }`,
                  ])}
                  data-menu-divider
                  key={menu + menuKey}
                >
                  {menu}
                </li>
              ) : (
                <li key={menuKey}>
                  <Menu
                    className={clsx({
                      // Animation
                      [`opacity-0 translate-x-[50px] animate-[0.4s_ease-in-out_0.1s_intro-menu] animate-fill-mode-forwards animate-delay-${
                        (menuKey + 1) * 10
                      }`]: !menu.active,
                    })}
                    menu={menu}
                    simpleMenu={simpleMenu}
                    formattedMenuState={[formattedMenu, setFormattedMenu]}
                    level="first"
                  ></Menu>
                  {/* BEGIN: Second Child */}
                  {menu.subMenu && (
                    <Transition
                      in={menu.activeDropdown}
                      onEnter={enter}
                      onExit={leave}
                      timeout={300}
                    >
                      <ul
                        className={clsx([
                          "bg-white/[0.06] rounded-2xl relative dark:bg-transparent",
                          "before:content-[''] before:block before:inset-0 before:bg-primary/60 before:rounded-2xl before:absolute before:z-[-1] before:dark:bg-darkmode-100/[0.2]",
                          {
                            hidden: !menu.activeDropdown,
                          },
                          { block: menu.activeDropdown },
                        ])}
                      >
                        {menu.subMenu.map((subMenu, subMenuKey) => (
                          <li key={subMenuKey}>
                            <Menu
                              className={clsx({
                                // Animation
                                [`opacity-0 translate-x-[50px] animate-[0.4s_ease-in-out_0.1s_intro-menu] animate-fill-mode-forwards animate-delay-${
                                  (subMenuKey + 1) * 10
                                }`]: !subMenu.active,
                              })}
                              menu={subMenu}
                              simpleMenu={simpleMenu}
                              formattedMenuState={[
                                formattedMenu,
                                setFormattedMenu,
                              ]}
                              level="second"
                            ></Menu>
                            {/* BEGIN: Third Child */}
                            {subMenu.subMenu && (
                              <Transition
                                in={subMenu.activeDropdown}
                                onEnter={enter}
                                onExit={leave}
                                timeout={300}
                              >
                                <ul
                                  className={clsx([
                                    "bg-white/[0.06] rounded-2xl relative dark:bg-transparent",
                                    "before:content-[''] before:block before:inset-0 before:bg-primary/60 before:rounded-2xl before:absolute before:z-[-1] before:dark:bg-darkmode-100/[0.2]",
                                    {
                                      hidden: !subMenu.activeDropdown,
                                    },
                                    {
                                      block: subMenu.activeDropdown,
                                    },
                                  ])}
                                >
                                  {subMenu.subMenu.map(
                                    (lastSubMenu, lastSubMenuKey) => (
                                      <li key={lastSubMenuKey}>
                                        <Menu
                                          className={clsx({
                                            // Animation
                                            [`opacity-0 translate-x-[50px] animate-[0.4s_ease-in-out_0.1s_intro-menu] animate-fill-mode-forwards animate-delay-${
                                              (lastSubMenuKey + 1) * 10
                                            }`]: !lastSubMenu.active,
                                          })}
                                          menu={lastSubMenu}
                                          simpleMenu={simpleMenu}
                                          formattedMenuState={[
                                            formattedMenu,
                                            setFormattedMenu,
                                          ]}
                                          level="third"
                                        ></Menu>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </Transition>
                            )}
                            {/* END: Third Child */}
                          </li>
                        ))}
                      </ul>
                    </Transition>
                  )}
                  {/* END: Second Child */}
                </li>
              )
            )}
            {/* END: First Child */}
          </ul>
        </div>
      </nav>
      {/* END: Side Menu */}
      {/* BEGIN: Content */}
      <div
        ref={wrapperRef}
        className={clsx([
          "ml-0 xl:ml-auto pb-6 px-3 sm:px-4 xl:pl-0 xl:pr-6 max-w-full xl:max-w-none min-w-0 h-screen overflow-y-auto overflow-x-hidden flex-1",
          "before:content-[''] before:w-full before:h-px before:block",
          {
            "xl:ml-[112px] px-3 sm:px-4 xl:pl-0": simpleMenu.wrapper,
          },
        ])}
      >
        <TopBar toggleMobileMenu={toggleMobileMenu} />
        <div
          className={clsx([
            "mt-[2.2rem] rounded-[1.6rem] w-full min-h-screen relative bg-slate-100 px-4 sm:px-6 pt-0.5 pb-6 dark:bg-darkmode-700",
            "before:content-[''] before:w-[96.5%] before:z-[-1] before:-mt-[0.87rem] before:rounded-[1.6rem] before:mx-auto before:h-20 before:bg-white/[0.2] before:absolute before:top-0 before:inset-x-0 before:dark:bg-darkmode-100/[0.2]",
            "after:content-[''] after:w-[92.5%] after:z-[-2] after:-mt-[1.76rem] after:rounded-[1.6rem] after:mx-auto after:h-20 after:bg-white/[0.15] after:absolute after:top-0 after:inset-x-0 after:dark:bg-darkmode-100/[0.15]",
          ])}
        >
          <Outlet />
        </div>
      </div>
      {/* END: Content */}
    </div>
  );
}

function Menu(props: {
  className?: string;
  simpleMenu: {
    active: boolean;
    hover: boolean;
    wrapper: boolean;
  };
  menu: FormattedMenu;
  formattedMenuState: [
    (FormattedMenu | string)[],
    Dispatch<SetStateAction<(FormattedMenu | string)[]>>
  ];
  level: "first" | "second" | "third";
}) {
  const navigate = useNavigate();
  const [formattedMenu, setFormattedMenu] = props.formattedMenuState;

  return (
    <a
      href={props.menu.subMenu ? "#" : props.menu.pathname}
      className={clsx([
        "h-[50px] flex items-center pl-5 text-white mb-1 relative dark:text-slate-300",
        {
          "bg-primary rounded-2xl dark:bg-transparent":
            props.menu.active && props.level == "first",
        },
        {
          "before:content-[''] before:block before:inset-0 before:bg-white/[0.11] before:rounded-2xl before:absolute before:border-b-2 before:border-white/[0.05] before:dark:bg-darkmode-400/[0.6]":
            props.menu.active && props.level == "first",
        },
        { "text-white/70 dark:text-slate-400": !props.menu.active },
        {
          "hover:bg-primary hover:rounded-2xl hover:dark:bg-transparent hover:before:block hover:before:inset-0 hover:before:z-[-1] hover:before:bg-white/[0.1] hover:before:rounded-2xl hover:before:absolute hover:before:dark:bg-darkmode-100/20":
            !props.menu.active &&
            !props.menu.activeDropdown &&
            props.level == "first",
        },
        props.className,
      ])}
      onClick={(event: React.MouseEvent) => {
        event.preventDefault();
        linkTo(props.menu, navigate);
        setFormattedMenu([...formattedMenu]);
      }}
    >
      <div
        className={clsx({
          "z-10 dark:text-slate-300":
            props.menu.active && props.level == "first",
        })}
      >
        <Lucide icon={props.menu.icon} className="w-5 h-5 -mt-0.5" />
      </div>
      <div
        className={clsx([
          "w-full ml-3 flex items-center",
          {
            "font-medium z-10 dark:text-slate-300":
              props.menu.active && props.level == "first",
          },
          { "font-medium": props.menu.active },
          { "xl:hidden whitespace-nowrap": props.simpleMenu.active },
        ])}
        data-menu-title
      >
        {props.menu.title}
        {props.menu.subMenu && (
          <div
            className={clsx([
              "transition ease-in duration-100 ml-auto mr-4",
              { "transform rotate-180": props.menu.activeDropdown },
            ])}
          >
            <Lucide icon="ChevronDown" className="w-4 h-4" />
          </div>
        )}
      </div>
    </a>
  );
}

export default Main;
