import { View, Text, Dimensions, Image, KeyboardAvoidingView, Platform } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import FormField from "@/components/FormField";
import SocialLoginButtons from "@/components/SocialLoginButtons";
import icons from "../../constants/icons";
import { Link } from "expo-router";

const { width, height } = Dimensions.get("window");

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <View className="flex-1 relative">
      {/* ✅ Background Gradient Positioned Correctly */}
      <LinearGradient
        colors={["#3389BB", "rgba(35, 105, 146, 0.12)", "rgba(51, 137, 187, 0.00)"]}
        locations={[0, 0.7763, 1]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={{
          position: "absolute",
          width: 237,
          height: 544,
          top: 0,
          left: (width - 237) / 2,
        }}
      />

      <SafeAreaView className="flex-1">
        <KeyboardAwareScrollView
          extraScrollHeight={100} // Adjust scrolling height to prevent top cutoff
          enableOnAndroid={true} // Ensures it works smoothly on Android
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View className="w-full flex-1 justify-between items-center h-full relative px-4">
            {/* ✅ Title Positioned on Top */}
            <View className="w-full flex justify-start items-center pt-[10px]">
              <Text className="font-psemibold text-white text-[36px]">Register</Text>
              <Text className="font-iregular text-white text-[16px] pt-[4px]">
                Please Register to Continue
              </Text>
            </View>

            {/* ✅ Form Fields Positioned Near the Bottom */}
            <View className="w-full flex items-center justify-end gap-y-5 pb-[45px]">
              <FormField
                placeholder="Full Name"
                value={form.email}
                handleChangeText={(e) => setForm({ ...form, email: e })}
                otherStyles="w-[338px]"
                icon={icons.user}
              />
              <FormField
                placeholder="Email"
                value={form.email}
                handleChangeText={(e) => setForm({ ...form, email: e })}
                otherStyles="w-[338px]"
                keyboardType="email-address"
                icon={icons.user}
              />
              <FormField
                placeholder="Password"
                value={form.password}
                handleChangeText={(e) => setForm({ ...form, password: e })}
                otherStyles="w-[338px]"
                secureTextEntry
                icon={icons.lock}
              />
              <FormField
                placeholder="Confirm Password"
                value={form.password}
                handleChangeText={(e) => setForm({ ...form, password: e })}
                otherStyles="w-[338px]"
                secureTextEntry
                icon={icons.lock}
              />
              <View className="flex-row items-center w-full justify-center mt-6">
                <View className="w-[80px] h-[1px] bg-white" />
                <Text className="text-white text-lg font-iregular mx-3">Or Register With</Text>
                <View className="w-[80px] h-[1px] bg-white" />
              </View>
              <SocialLoginButtons
              />

              <View className="flex justify-center pt-4 flex-row gap-1">
                <Text className="text-lg text-white font-pregular">
                  Already have an account?
                </Text>
                <Link href="/sign-in" className="text-lg font-psemibold text-white">
                  Sign In
                </Link>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </View>
  );
};

export default SignUp;