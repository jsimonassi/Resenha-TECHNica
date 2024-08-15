package todomanager

import android.util.Log
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class TodoManagerModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String {
        return "TodoManager"
    }

    @ReactMethod
    fun getTodos(promise: Promise){
        Log.d("OK", "Chegouuu")
        promise.resolve("Resposta nativa!")
    }

    @ReactMethod
    fun postTodo(){
        Log.d("OK", "Chegouuu")
        //TODO: Recuperar ToDo
    }
}