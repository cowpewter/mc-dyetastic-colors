package com.cowpewter.dyetasticcolors.common.blocks;

import com.cowpewter.dyetasticcolors.common.utils.Color;
import net.minecraft.block.AbstractBlock;
import net.minecraft.block.SoundType;
import net.minecraft.block.material.Material;
import net.minecraft.block.material.MaterialColor;
import net.minecraft.item.Item;
import net.minecraft.item.ItemGroup;
import net.minecraftforge.common.ToolType;
import java.util.ArrayList;

public class Bricks extends NamedBlock {
  public Bricks(String name, MaterialColor color) {
    super(name, Bricks.createBlockProps(color));
    this.setItemProperties(new Item.Properties().tab(ItemGroup.TAB_BUILDING_BLOCKS));
  }

  public static ArrayList<INamedBlock> generateAllColors() {
    ArrayList<INamedBlock> blocks = new ArrayList<INamedBlock>();

    String[] allColors = Color.getAllColorNames();
    for (String color : allColors) {
      blocks.add(new Bricks(color + "_bricks", Color.getMaterialForColor(color, false)));
    }

    return blocks;
  }

  private static AbstractBlock.Properties createBlockProps(MaterialColor color) {
    return AbstractBlock.Properties
      .of(Material.STONE, color)
      .harvestTool(ToolType.PICKAXE)
      .harvestLevel(0)
      .requiresCorrectToolForDrops()
      .strength(2F, 6F)
      .sound(SoundType.STONE);
  }
}
