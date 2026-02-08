import { PlayerMP3Antigo, AdapterPlayerMP3 } from './adapter';

describe('adapter', () => {
  it('should adapt old MP3 player to new interface', () => {
    const playerLegado = new PlayerMP3Antigo();
    const player = new AdapterPlayerMP3(playerLegado);

    // Mock console.log to test output
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    player.tocar('minha-musica.mp3');
    expect(consoleSpy).toHaveBeenCalledWith('[MP3 Legado] Reproduzindo arquivo: minha-musica.mp3');

    expect(player.obterStatus()).toBe('Reproduzindo');

    player.pausar();
    expect(consoleSpy).toHaveBeenCalledWith('[MP3 Legado] Reprodução parada');
    
    expect(player.obterStatus()).toBe('Parado');

    consoleSpy.mockRestore();
  });
});
