const APP_NAME = process?.env?.NEXT_PUBLIC_APPNAME

const truncateString = (string: string, limit: number) => {
    if (string.length > limit) {
        return string.substring(0, limit) + "..."
    } else {
        return string
    }
}


const getPageTitle = (pageName?: string) => {
    return pageName ?
        truncateString(pageName, 10) + ' | ' + APP_NAME :
        APP_NAME
}

export default getPageTitle