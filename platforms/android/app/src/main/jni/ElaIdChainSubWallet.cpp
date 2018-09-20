// Copyright (c) 2012-2018 The Elastos Open Source Project
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

#include "ElaUtils.h"
#include "IIdChainSubWallet.h"
#include "nlohmann/json.hpp"

using namespace Elastos::ElaWallet;

//"(JLjava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;"
static jstring JNICALL nativeCreateIdTransaction(JNIEnv *env, jobject clazz, jlong jIdSubWalletProxy,
		jstring jfromAddress,
		jstring jpayloadJson,
		jstring jprogramJson,
		jstring jmemo,
		jstring jremark)
{
	bool exception = false;
	std::string msgException;

	const char* fromAddress = env->GetStringUTFChars(jfromAddress, NULL);
	const char* payloadJson = env->GetStringUTFChars(jpayloadJson, NULL);
	const char* programJson = env->GetStringUTFChars(jprogramJson, NULL);
	const char* memo = env->GetStringUTFChars(jmemo, NULL);
	const char* remark = env->GetStringUTFChars(jremark, NULL);

	IIdChainSubWallet* wallet = (IIdChainSubWallet*)jIdSubWalletProxy;
	nlohmann::json tx;

	try {
		tx = wallet->CreateIdTransaction(fromAddress , nlohmann::json::parse(payloadJson),
				nlohmann::json::parse(programJson), memo, remark);
	} catch (std::exception& e) {
		exception = true;
		msgException = e.what();
	}

	env->ReleaseStringUTFChars(jfromAddress, fromAddress);
	env->ReleaseStringUTFChars(jpayloadJson, payloadJson);
	env->ReleaseStringUTFChars(jprogramJson, programJson);
	env->ReleaseStringUTFChars(jmemo, memo);
	env->ReleaseStringUTFChars(jremark, remark);

	if (exception)
		ThrowWalletException(env, msgException.c_str());

	return env->NewStringUTF(tx.dump().c_str());
}


static const JNINativeMethod gMethods[] = {
	{
		"nativeCreateIdTransaction",
		"(JLjava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;",
		(void*)nativeCreateIdTransaction
	},
};

jint register_elastos_spv_IIdChainSubWallet(JNIEnv *env)
{
	return jniRegisterNativeMethods(env,
			"com/elastos/spvcore/IIdChainSubWallet",
			gMethods, NELEM(gMethods));
}

