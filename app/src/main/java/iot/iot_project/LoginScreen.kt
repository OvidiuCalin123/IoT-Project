package iot.iot_project

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Button
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

object LoginScreen {

    @Composable
    fun LoginScreenLogic() {
        var email by remember { mutableStateOf("") }
        var password by remember { mutableStateOf("") }
        var emailError by remember { mutableStateOf(false) }
        var passwordError by remember { mutableStateOf(false) }

        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(top = 110.dp),
            verticalArrangement = Arrangement.Top,
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Text(
                text = "Login",
                style = TextStyle(
                    fontWeight = FontWeight.Bold,
                    fontSize = 35.sp // Adjust the size as needed
                )
            )
        }

        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(16.dp),
            verticalArrangement = Arrangement.Center,
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
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
                onClick = { /* TODO: Perform login action */ },
                modifier = Modifier.fillMaxWidth()
            ) {
                Text("Login", fontSize = 24.sp)
            }

            Spacer(modifier = Modifier.height(16.dp))

            TextButton(
                onClick = { /* TODO: Navigate to create account screen */ },
                modifier = Modifier.fillMaxWidth()
            ) {
                Text("Login")
            }
        }
    }

    private fun isValidEmail(email: String): Boolean {
        return android.util.Patterns.EMAIL_ADDRESS.matcher(email).matches()
    }

}