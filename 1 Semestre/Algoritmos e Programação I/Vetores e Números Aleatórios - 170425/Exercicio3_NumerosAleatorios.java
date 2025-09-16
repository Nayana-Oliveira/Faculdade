import java.util.Random;

public class Exercicio3_NumerosAleatorios {
    public static void main(String[] args) {
        int[] numeros = new int[10];
        Random rand = new Random();

        System.out.print("Números sorteados: ");
        for (int i = 0; i < numeros.length; i++) {
            numeros[i] = rand.nextInt(10) + 1; 
            System.out.print(numeros[i] + " ");
        }

        int menor = numeros[0];
        for (int i = 1; i < numeros.length; i++) {
            if (numeros[i] < menor) {
                menor = numeros[i];
            }
        }

        System.out.println("\nMenor número: " + menor);
    }
}
