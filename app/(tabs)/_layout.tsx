import { View, Text, ImageBackground, Image } from "react-native"
import React from "react"
import { Tabs } from "expo-router"
import { images } from "@/constants/images"
import { icons } from "@/constants/icons"

const TabIcon = ({ focused, icons, title}: any) => {
  if(focused) {
  return (
    <ImageBackground
      source={images.highlight}
      resizeMode="contain"
      className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 items-center justify-center overflow-hidden mt-4"
    >
      <Image source={icons} tintColor="#151312" className="size-5" />
      <Text className="text-secondary font-semibold text-md">{title}</Text>
    </ImageBackground>
  )
    }
    return (
      <View className="size-full justify-center items-center rounded-full mt-4">
        <Image source={icons} tintColor="#ABB5DB" className="size-5" />
      </View>
    )
}
const _Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          height: "100%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0f0D23",
          borderRadius: 50,
          borderWidth: 0,
          borderColor: "#0f0D23",
          height: 52,
          position: "absolute",
          marginBottom: 36,
          marginHorizontal: 20,
          overflow: "hidden",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <TabIcon focused={focused} icons={icons.home} title="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <TabIcon focused={focused} icons={icons.save} title="Saved" />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <TabIcon focused={focused} icons={icons.search} title="Search" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <TabIcon focused={focused} icons={icons.person} title="Profile" />
          ),
        }}
      />
    </Tabs>
  )
}

export default _Layout
