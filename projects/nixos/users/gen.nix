{ users, pkgs, ... }:
{
  # Define a user account. Don't forget to set a password with ‘passwd’.
  users.users.gen = {
    isNormalUser = true;
    description = "gen";
    extraGroups = [ "networkmanager" "wheel" "scanner" "lp" ];
    packages = with pkgs; [
      firefox
      discord
    ];
  };
}
