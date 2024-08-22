
const GoogleScripts = () => {
    return (
        <>
            {/* Google Adsense */}
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9595566973127613" crossOrigin="anonymous"></script>

            {/* Google Analytics */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-V75KJJJGJQ"></script>

            <script
                dangerouslySetInnerHTML={{
                    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-V75KJJJGJQ');
    `,
                }}
            />
        </>
    )
}

export default GoogleScripts