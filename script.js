var cuentas = [
    { nombre: "Mali", saldo: 200, password: "1234" },
    { nombre: "Gera", saldo: 290, password: "5678" },
    { nombre: "Maui", saldo: 67, password: "abcd" }
  ];
  
  var currentAccountIndex = null;
  
  function login() {
    var accountSelect = document.getElementById("account");
    var passwordInput = document.getElementById("password");
    var messageDiv = document.getElementById("message");
  
    if (cuentas[accountSelect.value].password === passwordInput.value) {
      currentAccountIndex = accountSelect.value;
      document.getElementById("login").style.display = "none";
      document.getElementById("menu").style.display = "block";
      messageDiv.innerHTML = "";
    } else {
      messageDiv.innerHTML = "Contraseña incorrecta";
    }
  }
  
  function showSection(section) {
    document.getElementById("balance").style.display = "none";
    document.getElementById("deposit").style.display = "none";
    document.getElementById("withdraw").style.display = "none";
    document.getElementById(section).style.display = "block";
  
    if (section === "balance") {
      document.getElementById("balance").innerHTML = "Saldo actual: $" + cuentas[currentAccountIndex].saldo;
    }
    document.getElementById("actions").style.display = "block";
  }
  
  function performTransaction(type) {
    var amount = parseFloat(document.getElementById(type + "-amount").value);
    if (isNaN(amount) || amount <= 0) {
      alert("Ingresa un monto válido.");
      return;
    }
  
    var newSaldo = type === "deposit" 
                   ? cuentas[currentAccountIndex].saldo + amount 
                   : cuentas[currentAccountIndex].saldo - amount;
  
    if (newSaldo > 990) {
      alert("No puedes tener más de $990 en tu cuenta.");
    } else if (newSaldo < 10) {
      alert("No puedes tener menos de $10 en tu cuenta.");
    } else {
      cuentas[currentAccountIndex].saldo = newSaldo;
      alert("Transacción exitosa. Nuevo saldo: $" + newSaldo);
      showSection('balance');
    }
  }
  
  function logout() {
    currentAccountIndex = null;
    document.getElementById("login").style.display = "block";
    document.getElementById("menu").style.display = "none";
    document.getElementById("actions").style.display = "none";
  }
  