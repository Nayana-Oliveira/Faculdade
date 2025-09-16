import java.util.Scanner;

public class Exercicio1_Vetores {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int[] numeros = new int[10];

        Scanner entrada = new Scanner(System.in);

        System.out.print("Números sorteados: ");
        for (int i = 0; i < 10; i++) {
            System.out.println("Digite o número: " + (i + 1));
            numeros[i] = entrada.nextInt();
        }

        for (int i = 0; i < 10; i++) {
            System.out.println("numero :" + (i + 1) + " - " + numeros[i]);
        }

        entrada.close();
    }
}