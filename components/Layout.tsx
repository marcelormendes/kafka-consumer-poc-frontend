import React, { ReactNode } from 'react'
import Head from 'next/head'
import { ButtonLink } from './ButtonLink'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = "This is the default title" }: Props) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <nav>
            <ButtonLink link="/index" desc="Home"/>
            <ButtonLink link="/sendmessage" desc="Send Message to Consumer" />
            <ButtonLink link="/messagelist" desc="See all Messages Sent" />
        </nav>
        {children}
        <footer>
            <hr />
            <span>This is the Footer</span>
        </footer>
    </div>
);

export default Layout;
