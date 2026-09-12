import "./style.css";
import {
  Cake,
  ChevronDown,
  Coffee,
  Heart,
  Mail,
  MapPin,
  Menu,
  PartyPopper,
  ShoppingBag,
  Star,
  UserPlus,
  createIcons,
} from "lucide";

createIcons({
  icons: {
    Menu,
    Coffee,
    Cake,
    ChevronDown,
    Heart,
    Mail,
    MapPin,
    PartyPopper,
    ShoppingBag,
    Star,
    UserPlus,
  },
});

const menuToggle = document.querySelector("#menu-toggle");
const mobileNavigation = document.querySelector("#mobile-navigation");

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  mobileNavigation.classList.toggle("hidden", isOpen);
});

mobileNavigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    mobileNavigation.classList.add("hidden");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    menuToggle.setAttribute("aria-expanded", "false");
    mobileNavigation.classList.add("hidden");
  }
});
