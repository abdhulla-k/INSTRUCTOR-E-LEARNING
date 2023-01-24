export type module = {
    questionPath: string,
    notePath: string,
    videoPath: string,
    videoTitle: string,
    _id: string
}

export type courseCreateResponse = {
    message: string,
    status: boolean,
    id: string,
    courseData: {
        price: number,
        description: string,
        modules: module[]
        imgPath: string,
        imgName: string,
        teacher: string,
        title: string,
        _id: string,
        __v: number
    }
}