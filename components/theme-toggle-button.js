import { useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const ThemeToggleButton = () => {
    const { toggleColorMode } = useColorMode();

    return (
        <AnimatePresence mode="wait" initial={false}>
            <motion.div
                style={{ display: "inline-block" }}
                key={useColorModeValue("light", "dark")}
                animate={{ rotate: 270 }}
                transition={{ duration: 0.5 }}
            >
                <IconButton
                    aria-label="Toggle theme"
                    colorScheme={useColorModeValue("purple", "orange")}
                    icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
                    onClick={toggleColorMode}
                ></IconButton>
            </motion.div>
        </AnimatePresence>
    );
};

export default ThemeToggleButton;
