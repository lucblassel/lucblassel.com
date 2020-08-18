import Head from "next/head"

export default function NewHead({ children }) {
    return (
        <Head>
            <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
            <meta name="HandheldFriendly" content="true"/>
            <link rel="icon" href="icon.svg" type="image/svg+xml"/>
            <link rel="alternate icon" href="favicon.ico"/>
            { children }
        </Head>
    )
}