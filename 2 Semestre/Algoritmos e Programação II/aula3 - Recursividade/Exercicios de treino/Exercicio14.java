// Dado um número n na base decimal, escreva uma função recursiva que converte este número para binário.

public class Exercicio14 {
    public static String decimalParaBinario(int n) {
        if (n == 0) return "0";
        if (n == 1) return "1";
        return decimalParaBinario(n / 2) + (n % 2);
    }

    public static void main(String[] args) {
        int n = 13;
        System.out.println("Decimal " + n + " em binário -> " + decimalParaBinario(n));
    }
}