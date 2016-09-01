import static spark.Spark.get;
import static spark.Spark.port;
import static spark.Spark.staticFileLocation;

import com.google.gson.Gson;

public class Server {
    public static void main(String[] args) {
        Gson gson = new Gson();
        staticFileLocation("/public");
        port(8080);
        get("/api/helloworld", "application/json", (request, response) -> new Data("Hello World !") ,gson::toJson);
    }
}