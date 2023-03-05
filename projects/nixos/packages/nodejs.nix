{ nixpkgs, environment, pkgs, ... }:
{
  environment.systemPackages = with pkgs; [
    nodejs
    yarn
    nodePackages.pnpm
  ];
}
