import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Home() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    useEffect(() => {
        const redirect = searchParams.get('redirect');
        if(!redirect) return;

        navigate(redirect);
    }, [searchParams, navigate]);

    return (
        <div>
            Yay!
        </div>
    )
}