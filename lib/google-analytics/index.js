import process from "../../next.config";

export const pageview = (url) =>{
    window.gtag('config', process.env.GOOGLE_ANALYTICS_ID, {
        path_url: url,
    })
}