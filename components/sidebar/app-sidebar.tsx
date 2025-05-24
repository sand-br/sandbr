"use client"

import * as React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader
} from "@/components/sidebar/sidebar"
import { SocialButtons } from "../social"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
      {...props}
    >
      <SidebarHeader>
      </SidebarHeader>
      <SidebarContent>

      </SidebarContent>
      <SidebarFooter>
        <SocialButtons/>
      </SidebarFooter>
    </Sidebar>
  )
}
