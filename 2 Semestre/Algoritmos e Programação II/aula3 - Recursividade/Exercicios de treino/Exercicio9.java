//Faça uma função recursiva que receba um número inteiro positivo impar N e retorne o fatorial duplo desse número. O fatorial duplo é definido como o produto de todos os números naturais ımpares de 1 até algum número natural ımpar N. Assim, o fatorial duplo de 5 é: 5! = 1 ∗ 3 ∗ 5 = 15

public class Exercicio9 {
    public static int fatorialDuplo(int n) {
        if (n == 1) return 1;
        return n * fatorialDuplo(n - 2);
    }

    public static void main(String[] args) {
        int n = 5;
        System.out.println("Fatorial duplo de " + n + " -> " + fatorialDuplo(n));
    }
}
