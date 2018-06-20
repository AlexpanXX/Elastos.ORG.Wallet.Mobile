
package com.elastos.spvcore;

import android.util.Log;


/**
 * Enviroment
 */
public class Enviroment {
    public static void InitializeRootPath(String rootPath) {
        nativeInitializeRootPath(rootPath);
    }

    /**
     * Get root path for all master wallets.
     * @return root path.
     */
    public static String GetRootPath() {
        return nativeGetRootPath();
    }

    public static IMasterWalletManager GetMasterWalletManager() {
        long proxy = nativeGetMasterWalletManager();
        Log.d("JS-Enviroment", "GetMasterWalletManager=============proxy="+proxy);
        return new IMasterWalletManager(proxy);
    }

    public static void SaveConfigs() {
        nativeSaveConfigs();
    }

    private static native void nativeInitializeRootPath(String rootPath);
    private static native long nativeGetMasterWalletManager();
    private static native String nativeGetRootPath();
    private static native void nativeSaveConfigs();
}
