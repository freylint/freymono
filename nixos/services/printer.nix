{ networking, pkgs ,... }:
{
  # Enable printing service
  services.printing.enable = true;
  services.avahi.enable = true;
  services.avahi.nssmdns = true;

  # Install printing drivers
  services.printing.drivers = with pkgs; [ gutenprint ];

#  # Enable scanner
#  hardware.sane.enable = true;
#
#  # Install scanner drivers
#  hardware.sane.extraBackends = with pkgs; [ epkowa utsushi ];
#  services.udev.packages = with pkgs; [ utsushi ];

}
