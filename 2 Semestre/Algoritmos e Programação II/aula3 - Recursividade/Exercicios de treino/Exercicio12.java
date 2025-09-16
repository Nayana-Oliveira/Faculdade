//Faça uma função recursiva que receba um número N e retorne o Enésimo termo da sequência de Padovan. A sequência de Padovan é uma sequência de naturais P(n) definida pelos valores iniciais 𝑃(0) = 𝑃(1) = 𝑝(2) = 1 e a seguinte relação recursiva 𝑃(𝑛) = 𝑃(𝑛 − 2) + 𝑃(𝑛 − 3) 𝑠𝑒 𝑛 > 3
//Alguns valores da sequência são: 1, 1, 1, 2, 2, 3, 4, 5, 7, 9, 12, 16, 21, 28...

public class Exercicio12 {
    public static int padovan(int n) {
        if (n == 0 || n == 1 || n == 2) return 1;
        return padovan(n - 2) + padovan(n - 3);
    }

    public static void main(String[] args) {
        int n = 8;
        System.out.println("Padovan(" + n + ") -> " + padovan(n));
    }
}