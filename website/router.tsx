import React from 'react';
import loadable from "@loadable/component";

const options = {
  fallback: <div>loading</div>
}

export type Routes = {
  path: string;
  exact?: boolean;
  component: React.ReactNode;
}[]

export const routes: Routes = [
  {
    path: "/",
    exact: true,
    component: loadable(() => import('./pages/home'), options),
  },
  {
    path: "/api-loader",
    component: loadable(() => import('./pages/api-loader'), options),
  },
  {
    path: "/map",
    component: loadable(() => import('./pages/map'), options),
  },
  {
    path: "/marker",
    component: loadable(() => import('./pages/marker'), options),
  },
  {
    path: "/info-window",
    component: loadable(() => import('./pages/info-window'), options),
  },
];


export const menus = [
  {
    label: '基本介绍',
    path: '/',
  },
  {
    label: 'APILoader 组件',
    path: '/apiloader',
  },
  {
    label: 'Map 组件',
    path: '/map',
  },
  {
    label: 'Marker 点标注组件',
    path: '/marker',
  },
  {
    label: 'InfoWindow 信息窗口',
    path: '/info-window',
  },
]