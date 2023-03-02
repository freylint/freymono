{ environment, pkgs, ... }:
{
  environment.systemPackages = with pkgs; [
    hyprland
  ];
}
