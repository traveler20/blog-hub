import { Member } from "@src/types";

export const members: Member[] = [
  {
    id: "kokopp",
    name: "ここっぷ",
    role: "",
    bio: "運営者サイト",
    avatarSrc: "/avatars/kokopp.jpg",
    sources: [
      "https://kawagoe.traveler20.site/feed.xml",
      "https://note.com/kokopp/rss",
    ],
    includeUrlRegex: "含めたい記事のURLにマッチする正規表現",
    excludeUrlRegex: "除きたい記事のURLにマッチする正規表現",
    twitterUsername: "kokopp_designer",
    instagramUsername: "kokopp_design",
    githubUsername: "",
    websiteUrl: "https://kawagoe.traveler20.site",
  },
  {
    id: "goguynet",
    name: "号外ネット",
    role: "",
    bio: "号外ネットの川越版。",
    avatarSrc: "/avatars/goguynet.jpg",
    sources: ["https://kawagoe.goguynet.jp/feed/"],
    twitterUsername: "",
    instagramUsername: "",
    githubUsername: "",
    websiteUrl: "https://kawagoe.goguynet.jp/",
  },
  {
    id: "kawagoe_blog",
    name: "川越ノオト",
    role: "",
    bio: "",
    avatarSrc: "/avatars/kawagoe_blog.jpg",
    sources: ["https://kawagoe-blog.com/feed/"],
    twitterUsername: "coedokko201Q",
    instagramUsername: "",
    githubUsername: "",
    websiteUrl: "https://kawagoe-blog.com",
  },
  {
    id: "korokoro",
    name: "小江戸川越STYLE",
    role: "",
    bio: "",
    avatarSrc: "/avatars/korokoro.jpg",
    sources: ["https://ameblo.jp/korokoro0105/rss.html"],
    twitterUsername: "SHIN8KOKO",
    instagramUsername: "",
    githubUsername: "",
    websiteUrl: "https://ameblo.jp/korokoro0105",
  },
  {
    id: "kawagoe_info",
    name: "川越水先案内板",
    role: "",
    bio: "",
    avatarSrc: "/avatars/kawagoe_info.jpg",
    sources: ["https://kawagoe-info.net/feed/"],
    twitterUsername: "kawagoemizusaki",
    instagramUsername: "",
    githubUsername: "",
    websiteUrl: "https://kawagoe-info.net/",
  },
  {
    id: "kawagoe_life",
    name: "川越のいいところ",
    role: "",
    bio: "",
    avatarSrc: "/avatars/kawagoe_life.jpg",
    sources: ["https://kawagoe-life.com/feed/"],
    twitterUsername: "e_naka11",
    instagramUsername: "",
    githubUsername: "",
    websiteUrl: "https://kawagoe-life.com/",
  },
  {
    id: "koedo_info",
    name: "カワゴエ・マス・メディア",
    role: "",
    bio: "",
    avatarSrc: "/avatars/koedo_info.jpg",
    sources: ["https://koedo.info/feed/"],
    twitterUsername: "KawagoePortal",
    instagramUsername: "kawagoeportal",
    githubUsername: "",
    websiteUrl: "https://koedo.info/",
  },
];
