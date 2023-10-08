import { createColumnHelper } from "@tanstack/react-table";
import moment from "moment";
import ButtonGroup from "../components/Table/ButtonGroup";

const columnHelper = createColumnHelper();

export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id: "blogs",
      title: "Blogs",
    },
  ];

export const dashboardLinks = [
  {
    link: "/dashboard",
    title: "Home",
    icon: "/assets/dashboard/home.png"
  },
  {
    link: "/dashboard/blogs",
    title: "Blogs Management",
    icon : "/assets/dashboard/blog.png"
  },
  {
    link: "/dashboard/portfolios",
    title: "Portfolio Management",
    icon : "/assets/dashboard/portfolio.png"
  },
];

export const COLORS = [
  "#DC2626",
  "#D97706",
  "#2563EB",
  "#9333EA",
  "#C026D3",
  "#DB2777",
  "#DB2777"
];

export const mockBlogData = [
  { id: 1, title: 'React Başlangıç Rehberi', date: '2023-08-16', author: 'Eray Aynacı', visible: true },
  { id: 2, title: 'JavaScript Temelleri', date: '2023-08-15', author: 'Eray Aynacı', visible: false },
];

export const columns = [
  columnHelper.accessor("id", {
    header: "Id",
  }),
  {
    header: 'Blog Başlığı',
    accessorKey: 'title',
  },
  {
    header: 'Yazılma Tarihi',
    accessorKey: 'date',
    cell: ({ getValue }) => moment(new Date(getValue())).format("MMM Do YY"),
  },
  {
    header: '',
    accessorKey: 'actions',
    cell: ({ row }) => <ButtonGroup blogVisible={row.original.visible} />,
  },
];