package iot.iot_project

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import iot.iot_project.ui.theme.IoT_projectTheme
import java.security.AllPermission

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            IoT_projectTheme(darkTheme = true) {
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    val navController = rememberNavController()
                    NavHost(navController = navController, startDestination = "login") {
                        composable("login") {
                            LoginScreen(navController)
                        }
                        composable("mainPage") {
                            MainScreen(navController)
                        }
                        composable("createAccount") {
                            CreateAccountScreen(navController)

                        }
                    }
                }
            }
        }
    }
}


@Composable
fun LoginScreen(navController: NavController) {
    var email by remember { mutableStateOf("") }
    var password by remember { mutableStateOf("") }
    var emailError by remember { mutableStateOf(false) }
    var passwordError by remember { mutableStateOf(false) }

        Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {

            Image(
                painter = painterResource(id = R.drawable.bulbok),
                contentDescription = "Your Image Description",
                contentScale = ContentScale.FillWidth
            )

        OutlinedTextField(
            value = email,
            onValueChange = {
                email = it
                emailError = !isValidEmail(it)
            },
            label = { Text("Email") },
            isError = emailError,
            modifier = Modifier.fillMaxWidth()
        )

        if (emailError) {
            Text(
                text = "Please enter a valid email",
                color = Color.Red,
                modifier = Modifier.padding(start = 8.dp, top = 4.dp)
            )
        }

        Spacer(modifier = Modifier.height(16.dp))

        OutlinedTextField(
            value = password,
            onValueChange = {
                password = it
                passwordError = it.length < 6 // Example validation
            },
            label = { Text("Password") },
            isError = passwordError,
            modifier = Modifier.fillMaxWidth()
        )

        if (passwordError) {
            Text(
                text = "Password must be at least 6 characters",
                color = Color.Red,
                modifier = Modifier.padding(start = 8.dp, top = 4.dp)
            )
        }

        Spacer(modifier = Modifier.height(16.dp))

        Button(
            onClick = { navController.navigate("mainPage") },
            colors = ButtonDefaults.buttonColors(contentColor = Color.Black),
            modifier = Modifier.fillMaxWidth()
            ) {
            Text("Login", fontSize = 24.sp)
        }

        Spacer(modifier = Modifier.height(16.dp))

        TextButton(
            onClick = {navController.navigate("createAccount")  },
            modifier = Modifier.fillMaxWidth()
        ) {
            Text(
                text = "Create an account",
                style = TextStyle(color = Color.White)
            )
        }
    }
}

fun isValidEmail(email: String): Boolean {
    return android.util.Patterns.EMAIL_ADDRESS.matcher(email).matches()
}

@Composable
fun MainScreen(navController: NavController) {
    var isImageOn by remember { mutableStateOf(true) }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        // Toggle the state when the image is clicked
        Text(
            text = if (isImageOn) "Press to turn light off" else "Press to turn light on",
            modifier = Modifier.padding(25.dp),
            fontSize = 27.5.sp
        )
        Image(
            painter = painterResource(id = if (isImageOn) R.drawable.bulbon else R.drawable.bulboff),
            contentDescription = "Your Image Description",
            modifier = Modifier.clickable { isImageOn = !isImageOn }
        )

    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun CreateAccountScreen(navController: NavController) {
    Column(
        modifier = Modifier.fillMaxSize()
    ) {
        // Top App Bar with back button
        TopAppBar(
            modifier = Modifier.fillMaxWidth(),
            navigationIcon = {
                IconButton(onClick = { navController.popBackStack() }) {
                    Icon(Icons.Filled.ArrowBack, contentDescription = "Back")
                }
            },
            title = { Text("") }
        )

        Text(
            modifier = Modifier
                .fillMaxWidth().fillMaxHeight().wrapContentHeight(Alignment.CenterVertically)
                .wrapContentWidth(Alignment.CenterHorizontally),
            text = "Altceva",
            fontSize = 24.sp,
            color = Color.White
        )
    }
}