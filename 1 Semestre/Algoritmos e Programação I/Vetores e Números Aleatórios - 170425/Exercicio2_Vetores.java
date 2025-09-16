public class Exercicio2_Vetores {
    public static void main(String[] args) {
        
        int maior = 0;
        int[] numeros = new int[] {90, 234, 567, 34, 6};

        for (int i = 0; i < 5; i++) {
            if (numeros[i] > maior) {
                maior = numeros[i];
            }
        }

        System.out.println("O maior número é: " + maior);   
    }
}
