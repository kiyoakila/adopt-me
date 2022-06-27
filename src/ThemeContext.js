import { createContext } from "react";

// context provider.

// this is mimicking useState hook.
// const [theme, setTheme] = useState('green')
const ThemeContext = createContext(["green", () => {}]);

export default ThemeContext;
