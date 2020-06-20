import React from "react";
import Link from "next/link";
import Button from "@material-ui/core/Button";

interface Props {
    link: string;
    desc: string;
}

export const ButtonLink = (props: Props) => {
    return (
        <Link href={props.link} >
            <Button component="a">{props.desc}</Button>
        </Link>
    );
};
