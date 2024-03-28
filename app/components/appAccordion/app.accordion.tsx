import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {T_APP_ACCORDION} from './app.accordion.types';
import {styles} from './app.accordion.style';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {useTheme} from '@react-navigation/native';
import {ChevronRight} from 'react-native-feather';
const AppAccordion: React.FC<T_APP_ACCORDION> = props => {
  const {colors} = useTheme();
  const shareValue = useSharedValue(0);
  const [bodySectionHeight, setBodySectionHeight] = useState(0);

  const bodyHeight = useAnimatedStyle(() => ({
    height: interpolate(shareValue.value, [0, 1], [0, bodySectionHeight]),
  }));

  const iconStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${interpolate(shareValue.value, [0, 1], [0, 90])}deg`,
        },
      ],
    };
  });

  useEffect(() => {
    if (props.isOpen) shareValue.value = 1;
  }, [props.isOpen]);

  const toggleButton = () => {
    if (shareValue.value === 0) {
      shareValue.value = withTiming(1, {
        duration: 300,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      });
    } else {
      shareValue.value = withTiming(0, {
        duration: 300,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      });
    }
  };

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        onPress={toggleButton}
        activeOpacity={0.8}
        style={styles.headingContainer}>
        {props.renderHeader ? (
          <>
            {props.renderHeader}
            <Animated.View style={iconStyle}>
              <ChevronRight stroke={colors.text} />
            </Animated.View>
          </>
        ) : (
          <>
            <Animated.View style={iconStyle}>
              <ChevronRight stroke={colors.text} />
            </Animated.View>
            <Text style={styles.heading}>{props.heading}</Text>
          </>
        )}
      </TouchableOpacity>
      <Animated.View style={[styles.contentContainer, bodyHeight]}>
        <View
          onLayout={event => {
            setBodySectionHeight(event.nativeEvent.layout.height);
          }}
          style={styles.bodyContainer}>
          {props.renderContent}
        </View>
      </Animated.View>
    </View>
  );
};

export default AppAccordion;
