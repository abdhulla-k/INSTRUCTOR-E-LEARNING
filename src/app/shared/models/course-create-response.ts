export type courseCreateResponse = {
    message: string,
    status: boolean,
    id: string,
    courseDetails: {
        title: string,
        description: string,
        imgPath: string,
        imgName: string,
        _id: string,
        __v: number
    }
}