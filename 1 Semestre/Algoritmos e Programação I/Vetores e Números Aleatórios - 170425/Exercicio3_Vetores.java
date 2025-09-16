import java.util.Scanner;

public class Exercicio3_Vetores {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        String[] nomes = new String[5];

        System.out.println("Digite 5 nomes:");
        for (int i = 0; i < nomes.length; i++) {
            System.out.print("Nome " + (i + 1) + ": ");
            nomes[i] = entrada.nextLine();
        }

        System.out.println("\n(a) Nomes do último para o primeiro:");
        for (int i = nomes.length - 1; i >= 0; i--) {
            System.out.println(nomes[i]);
        }

        System.out.println("\n(b) Primeiro e último nomes armazenados:");
        System.out.println("Primeiro: " + nomes[0]);
        System.out.println("Último: " + nomes[nomes.length - 1]);

        entrada.close();
    }
}
