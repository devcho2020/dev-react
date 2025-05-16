import { tsMenu } from './../types/menu';

export const menuItem:tsMenu[] = [
    {
        "name" : "Home",
        "path" : "/"
    },
    {
        "name" : "수다존",
        "subPath" : "/board",
        "subMenuItems" : [
            { "name" : "자유게시판", "path" : "/free" },
            { "name" : "피드백", "path" : "/feedback" }
        ]
    },
    {
        "name" : "게임",
        "subPath" : "/game",
        "subMenuItems" : [
            { "name" : "짱깸뽀", "path" : "/jjangkemppo" },
            { "name" : "메모리게임", "path" : "/memory-game" }
        ]
    }
]