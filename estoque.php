<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

$servername = "localhost"; // Endereço do servidor MySQL (geralmente é "localhost" para configurações locais)
$username = "root"; // Nome de usuário do MySQL
$password = ""; // Senha do MySQL
$dbname = "estoque_manugreen"; // Nome do banco de dados

// Estabelecer a conexão
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Verificar a conexão
if (!$conn) {
    die("Falha na conexão: " . mysqli_connect_error());
}

// Consulta SQL para recuperar todos os dados da tabela "estoque"
$sql = "SELECT * FROM estoque";

$result = mysqli_query($conn, $sql);

if (!$result) {
    die("Erro na consulta: " . mysqli_error($conn));
}
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="estoque.css">
    <title>Estoque Manugreen</title>
</head>
<body>
    <header>
        <button class="menu-button">
            <span id="menu-icon">&#9776;</span>
        </button>
        <div class="logo">
            <img src="logobrbr.png" alt="Logo do site">
        </div>
        <nav class="menu">
            <ul>
                <br>
                <br>
                <br>
                <li><a href="index.html">Menu</a></li>
                <li><a href="#">Informações</a></li>
                <li><a href="#">Galeria</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <h1>Tabela de Estoque</h1>
        <table>
            <thead>
                <tr>
                    <th>LINHA</th>
                    <th>CÓDIGO</th>
                    <th>DESCRIÇÃO</th>
                    <th>QUANTIDADE TOTAL EM ESTOQUE</th>
                    <!-- Adicione outras colunas conforme necessário -->
                </tr>
            </thead>
            <tbody>
                <?php
                // Loop para exibir os dados
                while ($row = mysqli_fetch_assoc($result)) {
                    echo "<tr>";
                    echo "<td>" . $row["LINHA"] . "</td>";
                    echo "<td>" . $row["CÓDIGO"] . "</td>";
                    echo "<td>" . $row["DESCRIÇÃO"] . "</td>";
                    echo "<td>" . $row["QUANTIDADE TOTAL EM ESTOQUE"] . "</td>";
                    // Adicione outras colunas conforme necessário
                    echo "</tr>";
                }
                ?>
            </tbody>
        </table>
    </main>
    <script src="estoque.js"></script>
</body>
</html>

<?php
mysqli_close($conn); // Fechar a conexão com o banco de dados
?>
