package todomanager

import android.content.Context
import android.content.SharedPreferences
import android.util.Log
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.bridge.ReadableMap
import org.json.JSONArray
import org.json.JSONObject

class TodoManagerModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    private val sharedPreferences: SharedPreferences =
        reactContext.getSharedPreferences("TodoManager", Context.MODE_PRIVATE)

    override fun getName(): String {
        return "TodoManager"
    }

    @ReactMethod
    fun getTodos(promise: Promise) {
        val todosJsonString = sharedPreferences.getString("todos", "[]")
        promise.resolve(todosJsonString)
    }

    @ReactMethod
    fun updateTodos(newTodos: ReadableArray, promise: Promise) {
        try {
            val todosArray = JSONArray()

            for (i in 0 until newTodos.size()) {
                val todoMap = newTodos.getMap(i)
                val todoObject = JSONObject()

                todoObject.put("name", todoMap.getString("name"))
                todoObject.put("time", todoMap.getString("time"))
                todoObject.put("completed", todoMap.getBoolean("completed"))

                todosArray.put(todoObject)
            }

            val editor = sharedPreferences.edit()
            editor.putString("todos", todosArray.toString())
            editor.apply()
            
        } catch (e: Exception) {
            promise.reject("ERROR_UPDATING_TODOS", "Failed to update todos", e)
        }
    }
}