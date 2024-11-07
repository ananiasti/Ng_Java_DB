package br.com.futebol;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Inicio {
    public static void main(String[] args){
        String jdbcUrl = "jdbc:oracle:thin:@localhost:1521:XE";
        String userName = "system";
        String password = "123456";

        try(Connection conection = DriverManager.getConnection(jdbcUrl, userName, password)){
            System.out.println("Conetado opaaaaaaaa");
        }catch (SQLException e) {
            System.err.println("Erro ao conectar : "+e.getMessage());
        }

    }
}
