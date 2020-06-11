#ifdef __OBJC__
#import <UIKit/UIKit.h>
#else
#ifndef FOUNDATION_EXPORT
#if defined(__cplusplus)
#define FOUNDATION_EXPORT extern "C"
#else
#define FOUNDATION_EXPORT extern
#endif
#endif
#endif

#import "BleClientManager.h"
#import "MultiPlatformBLEAdapter.h"
#import "RxBluetoothKit.h"

FOUNDATION_EXPORT double MultiplatformBleAdapterVersionNumber;
FOUNDATION_EXPORT const unsigned char MultiplatformBleAdapterVersionString[];

