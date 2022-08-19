import { useMemo } from "react";
import { useLocation } from "react-router-dom";

export function useSeletedKeys() {
    const { pathname } = useLocation();

    return useMemo(() => {
        const keys: string[] = [];
        let i = pathname.indexOf('/', 1);
        while(i !== -1) {
            keys.push(
                pathname.slice(0, i)
            );
            i = pathname.indexOf('/', i + 1);
        }
        keys.push(pathname);

        return keys.reverse();
    }, [pathname]);
}